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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 122,
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
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 109,
              "end": 115
            },
            "expression": {
              "type": "Literal",
              "start": 117,
              "end": 121,
              "value": null,
              "raw": "null"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 124,
      "end": 147,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 146,
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
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 133,
              "end": 139
            },
            "expression": {
              "type": "Literal",
              "start": 141,
              "end": 145,
              "value": null,
              "raw": "null"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 148,
      "end": 169,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 168,
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
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 157,
              "end": 164
            },
            "expression": {
              "type": "Identifier",
              "start": 166,
              "end": 167,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 171,
      "end": 199,
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 186,
        "decorators": [],
        "name": "isVoid",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      "body": {
        "type": "BlockStatement",
        "start": 196,
        "end": 199,
        "body": []
      },
      "expression": false
    },
    {
      "type": "IfStatement",
      "start": 268,
      "end": 293,
      "test": {
        "type": "BinaryExpression",
        "start": 271,
        "end": 288,
        "left": {
          "type": "Literal",
          "start": 271,
          "end": 275,
          "value": null,
          "raw": "null"
        },
        "operator": "===",
        "right": {
          "type": "CallExpression",
          "start": 280,
          "end": 288,
          "callee": {
            "type": "Identifier",
            "start": 280,
            "end": 286,
            "decorators": [],
            "name": "isVoid",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 290,
        "end": 293,
        "body": []
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
