__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 216,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 37,
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 37,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 25,
            "end": 35,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 25,
              "end": 26,
              "raw": "1",
              "value": 1
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 34,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 28,
                "end": 34
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 18,
        "decorators": [],
        "name": "Numbers1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 38,
      "end": 77,
      "body": {
        "type": "TSInterfaceBody",
        "start": 57,
        "end": 77,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 63,
            "end": 75,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 63,
              "end": 66,
              "raw": "'1'",
              "value": "1"
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 74,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 68,
                "end": 74
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 56,
        "decorators": [],
        "name": "Strings1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 82,
      "end": 98,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 86,
          "end": 97,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 86,
            "end": 97,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 97,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 89,
                "end": 97,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 97,
                  "decorators": [],
                  "name": "Numbers1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 99,
      "end": 108,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 99,
        "end": 107,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 99,
          "end": 103,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 99,
            "end": 100,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 101,
            "end": 102,
            "raw": "1",
            "value": 1
          }
        },
        "right": {
          "type": "Literal",
          "start": 106,
          "end": 107,
          "raw": "4",
          "value": 4
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 118,
      "end": 129,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 118,
        "end": 128,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 118,
          "end": 124,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 118,
            "end": 119,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 120,
            "end": 123,
            "raw": "'1'",
            "value": "1"
          }
        },
        "right": {
          "type": "Literal",
          "start": 127,
          "end": 128,
          "raw": "4",
          "value": 4
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 140,
      "end": 156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 155,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 155,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 155,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 147,
                "end": 155,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 155,
                  "decorators": [],
                  "name": "Strings1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 157,
      "end": 168,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 157,
        "end": 167,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 157,
          "end": 163,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 157,
            "end": 158,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 159,
            "end": 162,
            "raw": "'1'",
            "value": "1"
          }
        },
        "right": {
          "type": "Literal",
          "start": 166,
          "end": 167,
          "raw": "4",
          "value": 4
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 188,
      "end": 197,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 188,
        "end": 196,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 188,
          "end": 192,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 188,
            "end": 189,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 190,
            "end": 191,
            "raw": "1",
            "value": 1
          }
        },
        "right": {
          "type": "Literal",
          "start": 195,
          "end": 196,
          "raw": "4",
          "value": 4
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
