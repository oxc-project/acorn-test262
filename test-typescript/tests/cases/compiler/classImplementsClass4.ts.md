classImplementsClass4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 185,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 62,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 62,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 28,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 26,
              "end": 27,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "MethodDefinition",
            "start": 33,
            "end": 60,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 36,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 60,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 47,
                "end": 60,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 49,
                    "end": 58,
                    "argument": {
                      "type": "Literal",
                      "start": 56,
                      "end": 57,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 38,
                "end": 46,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 40,
                  "end": 46
                }
              }
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
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 63,
      "end": 123,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 84,
        "end": 123,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 90,
            "end": 121,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 90,
              "end": 93,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 93,
              "end": 121,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 96,
                "end": 121,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 106,
                    "end": 115,
                    "argument": {
                      "type": "Literal",
                      "start": 113,
                      "end": 114,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 70,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 82,
          "end": 83,
          "expression": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 125,
      "end": 146,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 144,
        "end": 146,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 133,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 142,
        "end": 143,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 148,
      "end": 157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 156,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 156,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 153,
              "end": 156,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 155,
                "end": 156,
                "typeName": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
                  "decorators": [],
                  "name": "C",
                  "optional": false
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
      "type": "VariableDeclaration",
      "start": 158,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 162,
          "end": 168,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 168,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 164,
              "end": 168,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 166,
                "end": 168,
                "typeName": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 168,
                  "decorators": [],
                  "name": "C2",
                  "optional": false
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
      "start": 170,
      "end": 177,
      "expression": {
        "type": "AssignmentExpression",
        "start": 170,
        "end": 176,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 170,
          "end": 171,
          "decorators": [],
          "name": "c",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 174,
          "end": 176,
          "decorators": [],
          "name": "c2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 178,
      "end": 185,
      "expression": {
        "type": "AssignmentExpression",
        "start": 178,
        "end": 184,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 178,
          "end": 180,
          "decorators": [],
          "name": "c2",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 183,
          "end": 184,
          "decorators": [],
          "name": "c",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
