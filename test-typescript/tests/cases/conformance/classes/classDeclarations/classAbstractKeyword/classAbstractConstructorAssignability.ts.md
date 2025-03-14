__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 158,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 10,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 10,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 12,
      "end": 41,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 41,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 37,
        "end": 38,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 43,
      "end": 63,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 61,
        "end": 63,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 50,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 59,
        "end": 60,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 65,
      "end": 87,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 86,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 82,
            "decorators": [],
            "name": "AA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 82,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 74,
                "end": 82,
                "exprName": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 82,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 85,
            "end": 86,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 88,
      "end": 110,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 109,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 105,
            "decorators": [],
            "name": "BB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 105,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 97,
                "end": 105,
                "exprName": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 105,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 108,
            "end": 109,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 132,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 128,
            "decorators": [],
            "name": "CC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 128,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 120,
                "end": 128,
                "exprName": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 128,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 131,
            "end": 132,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 135,
      "end": 142,
      "expression": {
        "type": "NewExpression",
        "start": 135,
        "end": 141,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 139,
          "end": 141,
          "decorators": [],
          "name": "AA",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 143,
      "end": 150,
      "expression": {
        "type": "NewExpression",
        "start": 143,
        "end": 149,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 147,
          "end": 149,
          "decorators": [],
          "name": "BB",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 151,
      "end": 158,
      "expression": {
        "type": "NewExpression",
        "start": 151,
        "end": 157,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 155,
          "end": 157,
          "decorators": [],
          "name": "CC",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
