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
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Number",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 18
            },
            "typeArguments": null,
            "arguments": [],
            "start": 8,
            "end": 20
          },
          "definite": false,
          "start": 4,
          "end": 20
        }
      ],
      "declare": false,
      "start": 0,
      "end": 21
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 27
          },
          "init": {
            "type": "Literal",
            "value": 100,
            "raw": "100",
            "start": 30,
            "end": 33
          },
          "definite": false,
          "start": 26,
          "end": 33
        }
      ],
      "declare": false,
      "start": 22,
      "end": 34
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 35,
          "end": 36
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "N",
          "optional": false,
          "typeAnnotation": null,
          "start": 39,
          "end": 40
        },
        "start": 35,
        "end": 40
      },
      "directive": null,
      "start": 35,
      "end": 41
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
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "String",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 61
            },
            "typeArguments": null,
            "arguments": [],
            "start": 51,
            "end": 63
          },
          "definite": false,
          "start": 47,
          "end": 63
        }
      ],
      "declare": false,
      "start": 43,
      "end": 64
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
            "start": 69,
            "end": 70
          },
          "init": {
            "type": "Literal",
            "value": "foge",
            "raw": "\"foge\"",
            "start": 73,
            "end": 79
          },
          "definite": false,
          "start": 69,
          "end": 79
        }
      ],
      "declare": false,
      "start": 65,
      "end": 80
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 81,
          "end": 82
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "S",
          "optional": false,
          "typeAnnotation": null,
          "start": 85,
          "end": 86
        },
        "start": 81,
        "end": 86
      },
      "directive": null,
      "start": 81,
      "end": 87
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
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 94
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Boolean",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 108
            },
            "typeArguments": null,
            "arguments": [],
            "start": 97,
            "end": 110
          },
          "definite": false,
          "start": 93,
          "end": 110
        }
      ],
      "declare": false,
      "start": 89,
      "end": 111
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
            "start": 116,
            "end": 117
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 120,
            "end": 124
          },
          "definite": false,
          "start": 116,
          "end": 124
        }
      ],
      "declare": false,
      "start": 112,
      "end": 125
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 126,
          "end": 127
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 130,
          "end": 131
        },
        "start": 126,
        "end": 131
      },
      "directive": null,
      "start": 126,
      "end": 132
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
            "name": "sym",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 143,
                "end": 149
              },
              "start": 141,
              "end": 149
            },
            "start": 138,
            "end": 149
          },
          "init": null,
          "definite": false,
          "start": 138,
          "end": 149
        }
      ],
      "declare": false,
      "start": 134,
      "end": 150
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
            "name": "Sym",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 167
                },
                "typeArguments": null,
                "start": 161,
                "end": 167
              },
              "start": 159,
              "end": 167
            },
            "start": 156,
            "end": 167
          },
          "init": null,
          "definite": false,
          "start": 156,
          "end": 167
        }
      ],
      "declare": false,
      "start": 152,
      "end": 168
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sym",
          "optional": false,
          "typeAnnotation": null,
          "start": 169,
          "end": 172
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Sym",
          "optional": false,
          "typeAnnotation": null,
          "start": 175,
          "end": 178
        },
        "start": 169,
        "end": 178
      },
      "directive": null,
      "start": 169,
      "end": 179
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 179
}
```
