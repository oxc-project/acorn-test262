complicatedGenericRecursiveBaseClassReference.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 90,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 65,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 62,
        "end": 65,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "S18",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 27,
        "end": 30,
        "decorators": [],
        "name": "S18",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 30,
        "end": 61,
        "params": [
          {
            "type": "TSArrayType",
            "start": 31,
            "end": 34,
            "elementType": {
              "type": "TSTypeReference",
              "start": 31,
              "end": 32,
              "typeName": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          },
          {
            "type": "TSArrayType",
            "start": 36,
            "end": 55,
            "elementType": {
              "type": "TSTypeLiteral",
              "start": 36,
              "end": 53,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 38,
                  "end": 45,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 41,
                    "decorators": [],
                    "name": "S19",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 41,
                    "end": 44,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 43,
                      "end": 44,
                      "typeName": {
                        "type": "Identifier",
                        "start": 43,
                        "end": 44,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 46,
                  "end": 51,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 48,
                    "end": 51,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 50,
                      "end": 51,
                      "typeName": {
                        "type": "Identifier",
                        "start": 50,
                        "end": 51,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "TSArrayType",
            "start": 57,
            "end": 60,
            "elementType": {
              "type": "TSTypeReference",
              "start": 57,
              "end": 58,
              "typeName": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 11,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 66,
      "end": 89,
      "expression": {
        "type": "AssignmentExpression",
        "start": 66,
        "end": 88,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 66,
          "end": 84,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 67,
            "end": 79,
            "arguments": [
              {
                "type": "Literal",
                "start": 75,
                "end": 78,
                "raw": "123",
                "value": 123
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 71,
              "end": 74,
              "decorators": [],
              "name": "S18",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 81,
            "end": 84,
            "decorators": [],
            "name": "S18",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 87,
          "end": 88,
          "raw": "0",
          "value": 0
        }
      }
    }
  ],
  "sourceType": "script"
}
```
