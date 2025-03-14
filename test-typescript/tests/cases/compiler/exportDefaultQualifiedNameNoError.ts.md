__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 46,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 25,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 25,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 23,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 21,
              "end": 22,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "EmptyStatement",
      "start": 25,
      "end": 26
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 27,
      "end": 46,
      "declaration": {
        "type": "MemberExpression",
        "start": 42,
        "end": 45,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 42,
          "end": 43,
          "decorators": [],
          "name": "C",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 44,
          "end": 45,
          "decorators": [],
          "name": "x",
          "optional": false
        }
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
  "start": 0,
  "end": 35,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 24,
        "raw": "\"./code\"",
        "value": "./code"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 10,
            "decorators": [],
            "name": "def",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 26,
      "end": 35,
      "expression": {
        "type": "UnaryExpression",
        "start": 26,
        "end": 34,
        "argument": {
          "type": "Identifier",
          "start": 31,
          "end": 34,
          "decorators": [],
          "name": "def",
          "optional": false
        },
        "operator": "void",
        "prefix": true
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
