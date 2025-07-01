__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 105
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 109,
              "end": 115
            },
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 117,
              "end": 121
            },
            "start": 108,
            "end": 122
          },
          "definite": false,
          "start": 104,
          "end": 122
        }
      ],
      "declare": false,
      "start": 100,
      "end": 123
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 129
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 133,
              "end": 139
            },
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 141,
              "end": 145
            },
            "start": 132,
            "end": 146
          },
          "definite": false,
          "start": 128,
          "end": 146
        }
      ],
      "declare": false,
      "start": 124,
      "end": 147
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 152,
            "end": 153
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 157,
              "end": 164
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 167
            },
            "start": 156,
            "end": 168
          },
          "definite": false,
          "start": 152,
          "end": 168
        }
      ],
      "declare": false,
      "start": 148,
      "end": 169
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isVoid",
        "optional": false,
        "typeAnnotation": null,
        "start": 180,
        "end": 186
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 191,
          "end": 195
        },
        "start": 189,
        "end": 195
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 196,
        "end": 199
      },
      "expression": false,
      "start": 171,
      "end": 199
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 271,
          "end": 275
        },
        "operator": "===",
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "isVoid",
            "optional": false,
            "typeAnnotation": null,
            "start": 280,
            "end": 286
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 280,
          "end": 288
        },
        "start": 271,
        "end": 288
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 290,
        "end": 293
      },
      "alternate": null,
      "start": 268,
      "end": 293
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 100,
  "end": 293
}
```
