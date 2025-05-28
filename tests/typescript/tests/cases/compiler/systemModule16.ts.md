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
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 24,
        "value": "foo",
        "raw": "\"foo\""
      },
      "phase": null,
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
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 101,
            "end": 102,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 112,
            "end": 113,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 123,
            "end": 125,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 127,
            "end": 129,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 137,
            "end": 139,
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 161,
            "end": 163,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 165,
            "end": 167,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 175,
            "end": 177,
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": null
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
      "exportKind": "value",
      "attributes": []
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
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
