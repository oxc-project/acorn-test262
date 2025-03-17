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
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 106,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 109,
            "end": 123,
            "expression": {
              "type": "Literal",
              "start": 118,
              "end": 122,
              "value": null,
              "raw": "null"
            },
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 110,
              "end": 116
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 133,
            "end": 147,
            "expression": {
              "type": "Literal",
              "start": 142,
              "end": 146,
              "value": null,
              "raw": "null"
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 134,
              "end": 140
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 154,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 157,
            "end": 169,
            "expression": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 158,
              "end": 165
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 172,
      "end": 200,
      "id": {
        "type": "Identifier",
        "start": 181,
        "end": 187,
        "name": "isVoid",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 197,
        "end": 200,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 190,
        "end": 196,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 192,
          "end": 196
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 269,
      "end": 294,
      "test": {
        "type": "BinaryExpression",
        "start": 272,
        "end": 289,
        "left": {
          "type": "Literal",
          "start": 272,
          "end": 276,
          "value": null,
          "raw": "null"
        },
        "operator": "===",
        "right": {
          "type": "CallExpression",
          "start": 281,
          "end": 289,
          "callee": {
            "type": "Identifier",
            "start": 281,
            "end": 287,
            "name": "isVoid",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 291,
        "end": 294,
        "body": []
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
