__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 205,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 24,
        "raw": "\"foo\"",
        "value": "foo"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 26,
      "end": 51,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 45,
        "end": 50,
        "raw": "\"bar\"",
        "value": "bar"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 33,
          "end": 39,
          "local": {
            "type": "Identifier",
            "start": 38,
            "end": 39,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportAllDeclaration",
      "start": 52,
      "end": 72,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 66,
        "end": 71,
        "raw": "\"foo\"",
        "value": "foo"
      }
    },
    {
      "type": "ExportAllDeclaration",
      "start": 73,
      "end": 92,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 87,
        "end": 92,
        "raw": "\"bar\"",
        "value": "bar"
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 93,
      "end": 103,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 101,
          "end": 102,
          "exported": {
            "type": "Identifier",
            "start": 101,
            "end": 102,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 101,
            "end": 102,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 104,
      "end": 114,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 112,
          "end": 113,
          "exported": {
            "type": "Identifier",
            "start": 112,
            "end": 113,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 112,
            "end": 113,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 115,
      "end": 152,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 146,
        "end": 151,
        "raw": "\"foo\"",
        "value": "foo"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 123,
          "end": 125,
          "imported": {
            "type": "Identifier",
            "start": 123,
            "end": 125,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 123,
            "end": 125,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 127,
          "end": 129,
          "imported": {
            "type": "Identifier",
            "start": 127,
            "end": 129,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 127,
            "end": 129,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 131,
          "end": 139,
          "imported": {
            "type": "Identifier",
            "start": 131,
            "end": 133,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 137,
            "end": 139,
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 153,
      "end": 190,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 184,
        "end": 189,
        "raw": "\"bar\"",
        "value": "bar"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 161,
          "end": 163,
          "exported": {
            "type": "Identifier",
            "start": 161,
            "end": 163,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 161,
            "end": 163,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 165,
          "end": 167,
          "exported": {
            "type": "Identifier",
            "start": 165,
            "end": 167,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 165,
            "end": 167,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 169,
          "end": 177,
          "exported": {
            "type": "Identifier",
            "start": 175,
            "end": 177,
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 169,
            "end": 171,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 192,
      "end": 205,
      "directive": null,
      "expression": {
        "type": "SequenceExpression",
        "start": 192,
        "end": 204,
        "expressions": [
          {
            "type": "Identifier",
            "start": 192,
            "end": 193,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 194,
            "end": 195,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 196,
            "end": 198,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 199,
            "end": 201,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 202,
            "end": 204,
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
