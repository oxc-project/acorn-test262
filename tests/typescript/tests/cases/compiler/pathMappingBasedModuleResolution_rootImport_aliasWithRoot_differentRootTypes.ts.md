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
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 22,
          "end": 24,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 22,
          "end": 24,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 16,
            "end": 20,
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 56,
            "decorators": [],
            "name": "bar1",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 88,
            "end": 92,
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 126,
            "end": 130,
            "decorators": [],
            "name": "bar2",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 164,
            "end": 168,
            "decorators": [],
            "name": "foo3",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 203,
            "end": 207,
            "decorators": [],
            "name": "bar3",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 242,
            "end": 246,
            "decorators": [],
            "name": "foo4",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 286,
            "end": 290,
            "decorators": [],
            "name": "bar4",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 330,
            "end": 334,
            "decorators": [],
            "name": "foo5",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 377,
            "end": 381,
            "decorators": [],
            "name": "bar5",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 424,
            "end": 428,
            "decorators": [],
            "name": "foo6",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 467,
            "end": 471,
            "decorators": [],
            "name": "bar6",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 510,
            "end": 514,
            "decorators": [],
            "name": "foo7",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 555,
            "end": 559,
            "decorators": [],
            "name": "bar7",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 600,
            "end": 604,
            "decorators": [],
            "name": "foo8",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 649,
            "end": 653,
            "decorators": [],
            "name": "bar8",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 698,
            "end": 702,
            "decorators": [],
            "name": "foo9",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 747,
            "end": 751,
            "decorators": [],
            "name": "bar9",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
