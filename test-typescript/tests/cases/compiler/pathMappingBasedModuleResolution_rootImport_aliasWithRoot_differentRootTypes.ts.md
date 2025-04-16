__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 25,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 24,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 24,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 22,
          "end": 24,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 780,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 35,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 16,
            "end": 20,
            "name": "foo1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 34,
        "value": "/foo",
        "raw": "\"/foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 36,
      "end": 71,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 45,
          "end": 56,
          "imported": {
            "type": "Identifier",
            "start": 45,
            "end": 48,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 56,
            "name": "bar1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 64,
        "end": 70,
        "value": "/bar",
        "raw": "\"/bar\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 72,
      "end": 109,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 81,
          "end": 92,
          "imported": {
            "type": "Identifier",
            "start": 81,
            "end": 84,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 88,
            "end": 92,
            "name": "foo2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 100,
        "end": 108,
        "value": "c:/foo",
        "raw": "\"c:/foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 110,
      "end": 147,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 119,
          "end": 130,
          "imported": {
            "type": "Identifier",
            "start": 119,
            "end": 122,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 126,
            "end": 130,
            "name": "bar2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 138,
        "end": 146,
        "value": "c:/bar",
        "raw": "\"c:/bar\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 148,
      "end": 186,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 157,
          "end": 168,
          "imported": {
            "type": "Identifier",
            "start": 157,
            "end": 160,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 164,
            "end": 168,
            "name": "foo3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 176,
        "end": 185,
        "value": "c:\\foo",
        "raw": "\"c:\\\\foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 187,
      "end": 225,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 196,
          "end": 207,
          "imported": {
            "type": "Identifier",
            "start": 196,
            "end": 199,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 203,
            "end": 207,
            "name": "bar3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 215,
        "end": 224,
        "value": "c:\\bar",
        "raw": "\"c:\\\\bar\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 226,
      "end": 269,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 235,
          "end": 246,
          "imported": {
            "type": "Identifier",
            "start": 235,
            "end": 238,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 242,
            "end": 246,
            "name": "foo4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 254,
        "end": 268,
        "value": "//server/foo",
        "raw": "\"//server/foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 270,
      "end": 313,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 279,
          "end": 290,
          "imported": {
            "type": "Identifier",
            "start": 279,
            "end": 282,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 286,
            "end": 290,
            "name": "bar4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 298,
        "end": 312,
        "value": "//server/bar",
        "raw": "\"//server/bar\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 314,
      "end": 360,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 323,
          "end": 334,
          "imported": {
            "type": "Identifier",
            "start": 323,
            "end": 326,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 330,
            "end": 334,
            "name": "foo5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 342,
        "end": 359,
        "value": "\\\\server\\foo",
        "raw": "\"\\\\\\\\server\\\\foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 361,
      "end": 407,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 370,
          "end": 381,
          "imported": {
            "type": "Identifier",
            "start": 370,
            "end": 373,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 377,
            "end": 381,
            "name": "bar5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 389,
        "end": 406,
        "value": "\\\\server\\bar",
        "raw": "\"\\\\\\\\server\\\\bar\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 408,
      "end": 450,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 417,
          "end": 428,
          "imported": {
            "type": "Identifier",
            "start": 417,
            "end": 420,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 424,
            "end": 428,
            "name": "foo6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 436,
        "end": 449,
        "value": "file:///foo",
        "raw": "\"file:///foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 451,
      "end": 493,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 460,
          "end": 471,
          "imported": {
            "type": "Identifier",
            "start": 460,
            "end": 463,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 467,
            "end": 471,
            "name": "bar6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 479,
        "end": 492,
        "value": "file:///bar",
        "raw": "\"file:///bar\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 494,
      "end": 538,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 503,
          "end": 514,
          "imported": {
            "type": "Identifier",
            "start": 503,
            "end": 506,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 510,
            "end": 514,
            "name": "foo7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 522,
        "end": 537,
        "value": "file://c:/foo",
        "raw": "\"file://c:/foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 539,
      "end": 583,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 548,
          "end": 559,
          "imported": {
            "type": "Identifier",
            "start": 548,
            "end": 551,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 555,
            "end": 559,
            "name": "bar7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 567,
        "end": 582,
        "value": "file://c:/bar",
        "raw": "\"file://c:/bar\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 584,
      "end": 632,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 593,
          "end": 604,
          "imported": {
            "type": "Identifier",
            "start": 593,
            "end": 596,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 600,
            "end": 604,
            "name": "foo8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 612,
        "end": 631,
        "value": "file://server/foo",
        "raw": "\"file://server/foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 633,
      "end": 681,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 642,
          "end": 653,
          "imported": {
            "type": "Identifier",
            "start": 642,
            "end": 645,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 649,
            "end": 653,
            "name": "bar8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 661,
        "end": 680,
        "value": "file://server/bar",
        "raw": "\"file://server/bar\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 682,
      "end": 730,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 691,
          "end": 702,
          "imported": {
            "type": "Identifier",
            "start": 691,
            "end": 694,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 698,
            "end": 702,
            "name": "foo9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 710,
        "end": 729,
        "value": "http://server/foo",
        "raw": "\"http://server/foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 731,
      "end": 779,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 740,
          "end": 751,
          "imported": {
            "type": "Identifier",
            "start": 740,
            "end": 743,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 747,
            "end": 751,
            "name": "bar9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 759,
        "end": 778,
        "value": "http://server/bar",
        "raw": "\"http://server/bar\""
      },
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
