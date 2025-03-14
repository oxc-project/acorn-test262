__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 25,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 24,
      "declaration": {
        "type": "ObjectExpression",
        "start": 15,
        "end": 23,
        "properties": [
          {
            "type": "Property",
            "start": 17,
            "end": 21,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Literal",
              "start": 20,
              "end": 21,
              "raw": "1",
              "value": 1
            }
          }
        ]
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
  "end": 89,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 20,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 19,
        "raw": "\"./a\"",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 46,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 30,
            "decorators": [],
            "name": "b1",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 33,
            "end": 46,
            "expression": {
              "type": "ObjectExpression",
              "start": 33,
              "end": 35,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 39,
              "end": 46
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 48,
      "end": 88,
      "expression": {
        "type": "ObjectExpression",
        "start": 49,
        "end": 87,
        "properties": [
          {
            "type": "SpreadElement",
            "start": 73,
            "end": 78,
            "argument": {
              "type": "Identifier",
              "start": 76,
              "end": 78,
              "decorators": [],
              "name": "b1",
              "optional": false
            }
          },
          {
            "type": "Property",
            "start": 84,
            "end": 85,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": true,
            "value": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ]
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
  "start": 0,
  "end": 87,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 20,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 19,
        "raw": "\"./a\"",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 44,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 30,
            "decorators": [],
            "name": "b2",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 33,
            "end": 44,
            "expression": {
              "type": "ObjectExpression",
              "start": 33,
              "end": 35,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 39,
              "end": 44
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 46,
      "end": 86,
      "expression": {
        "type": "ObjectExpression",
        "start": 47,
        "end": 85,
        "properties": [
          {
            "type": "SpreadElement",
            "start": 71,
            "end": 76,
            "argument": {
              "type": "Identifier",
              "start": 74,
              "end": 76,
              "decorators": [],
              "name": "b2",
              "optional": false
            }
          },
          {
            "type": "Property",
            "start": 82,
            "end": 83,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": true,
            "value": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ]
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
