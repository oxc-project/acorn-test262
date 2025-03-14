getAndSetAsMemberNames.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 288,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 43,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 43,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 15,
            "end": 28,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 18,
              "decorators": [],
              "name": "set",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 27,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 20,
                "end": 27
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 33,
            "end": 41,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 36,
              "decorators": [],
              "name": "get",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 39,
              "end": 40,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 44,
      "end": 65,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 53,
        "end": 65,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 59,
            "end": 63,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 62,
              "decorators": [],
              "name": "set",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 52,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 66,
      "end": 120,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 120,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 81,
            "end": 118,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 84,
              "decorators": [],
              "name": "set",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 85,
              "end": 118,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 89,
                "end": 118,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 99,
                    "end": 112,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 106,
                      "end": 111,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 106,
                        "end": 107,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 110,
                        "end": 111,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 86,
                  "end": 87,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 74,
        "decorators": [],
        "name": "C3",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 121,
      "end": 158,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 130,
        "end": 158,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 136,
            "end": 156,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 139,
              "decorators": [],
              "name": "get",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 148,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 141,
                "end": 148
              }
            },
            "value": {
              "type": "Literal",
              "start": 151,
              "end": 155,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 129,
        "decorators": [],
        "name": "C4",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 159,
      "end": 287,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 168,
        "end": 287,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 174,
            "end": 231,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 181,
              "end": 184,
              "decorators": [],
              "name": "set",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 184,
              "end": 199,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 186,
                "end": 199,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 189,
                  "end": 199,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 192,
                    "end": 199
                  }
                }
              }
            },
            "value": {
              "type": "FunctionExpression",
              "start": 202,
              "end": 230,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 214,
                "end": 230,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 216,
                    "end": 228,
                    "argument": {
                      "type": "Literal",
                      "start": 223,
                      "end": 227,
                      "raw": "true",
                      "value": true
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
          },
          {
            "type": "MethodDefinition",
            "start": 236,
            "end": 268,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 236,
              "end": 239,
              "decorators": [],
              "name": "get",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 240,
              "end": 268,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 252,
                "end": 268,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 254,
                    "end": 266,
                    "argument": {
                      "type": "Literal",
                      "start": 261,
                      "end": 265,
                      "raw": "true",
                      "value": true
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
                "start": 242,
                "end": 251,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 244,
                  "end": 251
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 273,
            "end": 285,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 277,
              "end": 278,
              "decorators": [],
              "name": "t",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 278,
              "end": 285,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 282,
                "end": 285,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 279,
                  "end": 280,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 167,
        "decorators": [],
        "name": "C5",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
