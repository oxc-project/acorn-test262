__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 19
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 22,
          "end": 24
        },
        "expression": false,
        "start": 7,
        "end": 24
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 24
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 25
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 19
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 22,
          "end": 24
        },
        "expression": false,
        "start": 7,
        "end": 24
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 24
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 25
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 20
          },
          "importKind": "value",
          "start": 9,
          "end": 20
        }
      ],
      "source": {
        "type": "Literal",
        "value": "/foo",
        "raw": "\"/foo\"",
        "start": 28,
        "end": 34
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 35
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 48
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar1",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 56
          },
          "importKind": "value",
          "start": 45,
          "end": 56
        }
      ],
      "source": {
        "type": "Literal",
        "value": "/bar",
        "raw": "\"/bar\"",
        "start": 64,
        "end": 70
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 36,
      "end": 71
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 84
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 92
          },
          "importKind": "value",
          "start": 81,
          "end": 92
        }
      ],
      "source": {
        "type": "Literal",
        "value": "c:/foo",
        "raw": "\"c:/foo\"",
        "start": 100,
        "end": 108
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 72,
      "end": 109
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 122
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar2",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 130
          },
          "importKind": "value",
          "start": 119,
          "end": 130
        }
      ],
      "source": {
        "type": "Literal",
        "value": "c:/bar",
        "raw": "\"c:/bar\"",
        "start": 138,
        "end": 146
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 110,
      "end": 147
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 160
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo3",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 168
          },
          "importKind": "value",
          "start": 157,
          "end": 168
        }
      ],
      "source": {
        "type": "Literal",
        "value": "c:\\foo",
        "raw": "\"c:\\\\foo\"",
        "start": 176,
        "end": 185
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 148,
      "end": 186
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 199
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar3",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 207
          },
          "importKind": "value",
          "start": 196,
          "end": 207
        }
      ],
      "source": {
        "type": "Literal",
        "value": "c:\\bar",
        "raw": "\"c:\\\\bar\"",
        "start": 215,
        "end": 224
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 187,
      "end": 225
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 235,
            "end": 238
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo4",
            "optional": false,
            "typeAnnotation": null,
            "start": 242,
            "end": 246
          },
          "importKind": "value",
          "start": 235,
          "end": 246
        }
      ],
      "source": {
        "type": "Literal",
        "value": "//server/foo",
        "raw": "\"//server/foo\"",
        "start": 254,
        "end": 268
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 226,
      "end": 269
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 282
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar4",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 290
          },
          "importKind": "value",
          "start": 279,
          "end": 290
        }
      ],
      "source": {
        "type": "Literal",
        "value": "//server/bar",
        "raw": "\"//server/bar\"",
        "start": 298,
        "end": 312
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 270,
      "end": 313
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 326
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo5",
            "optional": false,
            "typeAnnotation": null,
            "start": 330,
            "end": 334
          },
          "importKind": "value",
          "start": 323,
          "end": 334
        }
      ],
      "source": {
        "type": "Literal",
        "value": "\\\\server\\foo",
        "raw": "\"\\\\\\\\server\\\\foo\"",
        "start": 342,
        "end": 359
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 314,
      "end": 360
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 370,
            "end": 373
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar5",
            "optional": false,
            "typeAnnotation": null,
            "start": 377,
            "end": 381
          },
          "importKind": "value",
          "start": 370,
          "end": 381
        }
      ],
      "source": {
        "type": "Literal",
        "value": "\\\\server\\bar",
        "raw": "\"\\\\\\\\server\\\\bar\"",
        "start": 389,
        "end": 406
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 361,
      "end": 407
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 417,
            "end": 420
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo6",
            "optional": false,
            "typeAnnotation": null,
            "start": 424,
            "end": 428
          },
          "importKind": "value",
          "start": 417,
          "end": 428
        }
      ],
      "source": {
        "type": "Literal",
        "value": "file:///foo",
        "raw": "\"file:///foo\"",
        "start": 436,
        "end": 449
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 408,
      "end": 450
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 460,
            "end": 463
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar6",
            "optional": false,
            "typeAnnotation": null,
            "start": 467,
            "end": 471
          },
          "importKind": "value",
          "start": 460,
          "end": 471
        }
      ],
      "source": {
        "type": "Literal",
        "value": "file:///bar",
        "raw": "\"file:///bar\"",
        "start": 479,
        "end": 492
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 451,
      "end": 493
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 503,
            "end": 506
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo7",
            "optional": false,
            "typeAnnotation": null,
            "start": 510,
            "end": 514
          },
          "importKind": "value",
          "start": 503,
          "end": 514
        }
      ],
      "source": {
        "type": "Literal",
        "value": "file://c:/foo",
        "raw": "\"file://c:/foo\"",
        "start": 522,
        "end": 537
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 494,
      "end": 538
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 548,
            "end": 551
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar7",
            "optional": false,
            "typeAnnotation": null,
            "start": 555,
            "end": 559
          },
          "importKind": "value",
          "start": 548,
          "end": 559
        }
      ],
      "source": {
        "type": "Literal",
        "value": "file://c:/bar",
        "raw": "\"file://c:/bar\"",
        "start": 567,
        "end": 582
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 539,
      "end": 583
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 593,
            "end": 596
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo8",
            "optional": false,
            "typeAnnotation": null,
            "start": 600,
            "end": 604
          },
          "importKind": "value",
          "start": 593,
          "end": 604
        }
      ],
      "source": {
        "type": "Literal",
        "value": "file://server/foo",
        "raw": "\"file://server/foo\"",
        "start": 612,
        "end": 631
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 584,
      "end": 632
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 642,
            "end": 645
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar8",
            "optional": false,
            "typeAnnotation": null,
            "start": 649,
            "end": 653
          },
          "importKind": "value",
          "start": 642,
          "end": 653
        }
      ],
      "source": {
        "type": "Literal",
        "value": "file://server/bar",
        "raw": "\"file://server/bar\"",
        "start": 661,
        "end": 680
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 633,
      "end": 681
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 691,
            "end": 694
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo9",
            "optional": false,
            "typeAnnotation": null,
            "start": 698,
            "end": 702
          },
          "importKind": "value",
          "start": 691,
          "end": 702
        }
      ],
      "source": {
        "type": "Literal",
        "value": "http://server/foo",
        "raw": "\"http://server/foo\"",
        "start": 710,
        "end": 729
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 682,
      "end": 730
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 740,
            "end": 743
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar9",
            "optional": false,
            "typeAnnotation": null,
            "start": 747,
            "end": 751
          },
          "importKind": "value",
          "start": 740,
          "end": 751
        }
      ],
      "source": {
        "type": "Literal",
        "value": "http://server/bar",
        "raw": "\"http://server/bar\"",
        "start": 759,
        "end": 778
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 731,
      "end": 779
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 780
}
```
