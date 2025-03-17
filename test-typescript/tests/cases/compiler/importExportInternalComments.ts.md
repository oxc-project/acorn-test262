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
      "kind": "module",
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "raw": "\"foo\"",
        "value": "foo"
      }
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
        "decorators": [],
        "name": "Array",
        "optional": false,
        "typeAnnotation": null
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 104,
        "end": 109,
        "raw": "\"foo\"",
        "value": "foo"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 19,
          "end": 20,
          "local": {
            "type": "Identifier",
            "start": 19,
            "end": 20,
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 42,
            "end": 43,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 57,
          "end": 75,
          "imported": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 74,
            "end": 75,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 117,
      "end": 174,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 168,
        "end": 173,
        "raw": "\"foo\"",
        "value": "foo"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 130,
          "end": 150,
          "local": {
            "type": "Identifier",
            "start": 147,
            "end": 150,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 176,
      "end": 194,
      "directive": null,
      "expression": {
        "type": "SequenceExpression",
        "start": 176,
        "end": 193,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 176,
            "end": 182,
            "argument": {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "void",
            "prefix": true
          },
          {
            "type": "Identifier",
            "start": 184,
            "end": 185,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 187,
            "end": 188,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 190,
            "end": 193,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 243,
      "end": 330,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 324,
        "end": 329,
        "raw": "\"foo\"",
        "value": "foo"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 264,
          "end": 265,
          "exported": {
            "type": "Identifier",
            "start": 264,
            "end": 265,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 264,
            "end": 265,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 279,
          "end": 297,
          "exported": {
            "type": "Identifier",
            "start": 296,
            "end": 297,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 279,
            "end": 280,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportAllDeclaration",
      "start": 337,
      "end": 374,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 369,
        "end": 374,
        "raw": "\"foo\"",
        "value": "foo"
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
