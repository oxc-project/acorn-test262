__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 101,
  "end": 295,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 124,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 123,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 106,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 109,
            "end": 123,
            "expression": {
              "type": "Literal",
              "start": 118,
              "end": 122,
              "raw": "null",
              "value": null
            },
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 110,
              "end": 116
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 148,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 147,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 133,
            "end": 147,
            "expression": {
              "type": "Literal",
              "start": 142,
              "end": 146,
              "raw": "null",
              "value": null
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 134,
              "end": 140
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 149,
      "end": 170,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 169,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 154,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 157,
            "end": 169,
            "expression": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 158,
              "end": 165
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 172,
      "end": 200,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 197,
        "end": 200,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 181,
        "end": 187,
        "decorators": [],
        "name": "isVoid",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 190,
        "end": 196,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 192,
          "end": 196
        }
      },
      "typeParameters": null
    },
    {
      "type": "IfStatement",
      "start": 269,
      "end": 294,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 291,
        "end": 294,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 272,
        "end": 289,
        "operator": "===",
        "left": {
          "type": "Literal",
          "start": 272,
          "end": 276,
          "raw": "null",
          "value": null
        },
        "right": {
          "type": "CallExpression",
          "start": 281,
          "end": 289,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 281,
            "end": 287,
            "decorators": [],
            "name": "isVoid",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
