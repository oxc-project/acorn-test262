__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 100,
  "end": 293,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 100,
      "end": 123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 122,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 105,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 108,
            "end": 122,
            "expression": {
              "type": "Literal",
              "start": 117,
              "end": 121,
              "raw": "null",
              "value": null
            },
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 109,
              "end": 115
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 124,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 146,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 129,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 132,
            "end": 146,
            "expression": {
              "type": "Literal",
              "start": 141,
              "end": 145,
              "raw": "null",
              "value": null
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 133,
              "end": 139
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 148,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 168,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 153,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 156,
            "end": 168,
            "expression": {
              "type": "Identifier",
              "start": 166,
              "end": 167,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 157,
              "end": 164
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 171,
      "end": 199,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 196,
        "end": 199,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 186,
        "decorators": [],
        "name": "isVoid",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 189,
        "end": 195,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 191,
          "end": 195
        }
      },
      "typeParameters": null
    },
    {
      "type": "IfStatement",
      "start": 268,
      "end": 293,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 290,
        "end": 293,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 271,
        "end": 288,
        "operator": "===",
        "left": {
          "type": "Literal",
          "start": 271,
          "end": 275,
          "raw": "null",
          "value": null
        },
        "right": {
          "type": "CallExpression",
          "start": 280,
          "end": 288,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 280,
            "end": 286,
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
