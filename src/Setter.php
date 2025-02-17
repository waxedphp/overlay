<?php
namespace Waxedphp\Overlay;

use \Waxedphp\Waxedphp\Php\Setters\AbstractSetter;

class Setter extends AbstractSetter {

  /**
  */
  protected ?string $waxedOverlayFade = null;
  protected ?string $waxedOverlayBackground = null;
  protected ?string $waxedOverlayImage = null;
  protected ?string $waxedOverlayImageColor = null;
  protected ?string $waxedOverlayFontawesome = null;
  protected ?string $waxedOverlayFontawesomeColor = null;

  /**
   * allowed options
   *
   * @var array<mixed> $_allowedOptions
   */
  protected array $_allowedOptions = [
    'waxedOverlayFade', 'waxedOverlayBackground',
    'waxedOverlayImage', 'waxedOverlayImageColor',
    'waxedOverlayFontawesome', 'waxedOverlayFontawesomeColor',
  ];

  /**
  * value
  *
  * @param mixed $value
  * @return array<mixed>
  */
  public function value(mixed $value): array {
    $a = $this->getArrayOfAllowedOptions();
    return $a;
  }

}
