__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 22,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 21,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "value": "foo",
        "raw": "\"foo\""
      },
      "kind": "module",
      "declare": true,
      "global": false
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
  "start": 6,
  "end": 46,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 6,
      "end": 45,
      "declaration": {
        "type": "Identifier",
        "start": 33,
        "end": 38,
        "name": "Array",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
  "start": 6,
  "end": 374,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 6,
      "end": 110,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 19,
          "end": 20,
          "local": {
            "type": "Identifier",
            "start": 19,
            "end": 20,
            "name": "D",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 42,
          "end": 43,
          "imported": {
            "type": "Identifier",
            "start": 42,
            "end": 43,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 42,
            "end": 43,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 57,
          "end": 75,
          "imported": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 74,
            "end": 75,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 104,
        "end": 109,
        "value": "foo",
        "raw": "\"foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 117,
      "end": 174,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 130,
          "end": 150,
          "local": {
            "type": "Identifier",
            "start": 147,
            "end": 150,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 168,
        "end": 173,
        "value": "foo",
        "raw": "\"foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 176,
      "end": 194,
      "expression": {
        "type": "SequenceExpression",
        "start": 176,
        "end": 193,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 176,
            "end": 182,
            "operator": "void",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Identifier",
            "start": 184,
            "end": 185,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 187,
            "end": 188,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 190,
            "end": 193,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 243,
      "end": 330,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 264,
          "end": 265,
          "local": {
            "type": "Identifier",
            "start": 264,
            "end": 265,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 264,
            "end": 265,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 279,
          "end": 297,
          "local": {
            "type": "Identifier",
            "start": 279,
            "end": 280,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 296,
            "end": 297,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 324,
        "end": 329,
        "value": "foo",
        "raw": "\"foo\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 337,
      "end": 374,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 369,
        "end": 374,
        "value": "foo",
        "raw": "\"foo\""
      },
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
