__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 206,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 24,
        "value": "foo",
        "raw": "\"foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 26,
      "end": 51,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 33,
          "end": 39,
          "local": {
            "type": "Identifier",
            "start": 38,
            "end": 39,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 45,
        "end": 50,
        "value": "bar",
        "raw": "\"bar\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 52,
      "end": 72,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 66,
        "end": 71,
        "value": "foo",
        "raw": "\"foo\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 73,
      "end": 92,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 87,
        "end": 92,
        "value": "bar",
        "raw": "\"bar\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 93,
      "end": 103,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 101,
          "end": 102,
          "local": {
            "type": "Identifier",
            "start": 101,
            "end": 102,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 101,
            "end": 102,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 104,
      "end": 114,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 112,
          "end": 113,
          "local": {
            "type": "Identifier",
            "start": 112,
            "end": 113,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 112,
            "end": 113,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 115,
      "end": 152,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 123,
          "end": 125,
          "imported": {
            "type": "Identifier",
            "start": 123,
            "end": 125,
            "name": "a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 123,
            "end": 125,
            "name": "a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 127,
          "end": 129,
          "imported": {
            "type": "Identifier",
            "start": 127,
            "end": 129,
            "name": "b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 127,
            "end": 129,
            "name": "b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 131,
          "end": 139,
          "imported": {
            "type": "Identifier",
            "start": 131,
            "end": 133,
            "name": "c1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 137,
            "end": 139,
            "name": "d1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 146,
        "end": 151,
        "value": "foo",
        "raw": "\"foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 153,
      "end": 190,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 161,
          "end": 163,
          "local": {
            "type": "Identifier",
            "start": 161,
            "end": 163,
            "name": "a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 161,
            "end": 163,
            "name": "a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 165,
          "end": 167,
          "local": {
            "type": "Identifier",
            "start": 165,
            "end": 167,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 165,
            "end": 167,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 169,
          "end": 177,
          "local": {
            "type": "Identifier",
            "start": 169,
            "end": 171,
            "name": "c2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 175,
            "end": 177,
            "name": "d2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 184,
        "end": 189,
        "value": "bar",
        "raw": "\"bar\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 192,
      "end": 205,
      "expression": {
        "type": "SequenceExpression",
        "start": 192,
        "end": 204,
        "expressions": [
          {
            "type": "Identifier",
            "start": 192,
            "end": 193,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 194,
            "end": 195,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 196,
            "end": 198,
            "name": "a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 199,
            "end": 201,
            "name": "b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 202,
            "end": 204,
            "name": "d1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
