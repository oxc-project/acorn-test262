unionTypeWithRecursiveSubtypeReduction1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 247,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 45,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 45,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 19,
            "end": 43,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 33,
              "decorators": [],
              "name": "members",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 42,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 35,
                "end": 42,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 35,
                  "end": 40,
                  "typeName": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 40,
                    "decorators": [],
                    "name": "Class",
                    "optional": false
                  }
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "decorators": [],
        "name": "Module",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 47,
      "end": 108,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 63,
        "end": 108,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 69,
            "end": 106,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 83,
              "decorators": [],
              "name": "members",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 105,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 85,
                "end": 105,
                "elementType": {
                  "type": "TSUnionType",
                  "start": 86,
                  "end": 102,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 86,
                      "end": 91,
                      "typeName": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 91,
                        "decorators": [],
                        "name": "Class",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 94,
                      "end": 102,
                      "typeName": {
                        "type": "Identifier",
                        "start": 94,
                        "end": 102,
                        "decorators": [],
                        "name": "Property",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 62,
        "decorators": [],
        "name": "Namespace",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 110,
      "end": 155,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 122,
        "end": 155,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 128,
            "end": 153,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 141,
              "decorators": [],
              "name": "parent",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 152,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 143,
                "end": 152,
                "typeName": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 152,
                  "decorators": [],
                  "name": "Namespace",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 121,
        "decorators": [],
        "name": "Class",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 157,
      "end": 210,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 172,
        "end": 210,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 178,
            "end": 208,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 185,
              "end": 191,
              "decorators": [],
              "name": "parent",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 191,
              "end": 207,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 193,
                "end": 207,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 193,
                    "end": 199,
                    "typeName": {
                      "type": "Identifier",
                      "start": 193,
                      "end": 199,
                      "decorators": [],
                      "name": "Module",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 202,
                    "end": 207,
                    "typeName": {
                      "type": "Identifier",
                      "start": 202,
                      "end": 207,
                      "decorators": [],
                      "name": "Class",
                      "optional": false
                    }
                  }
                ]
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 171,
        "decorators": [],
        "name": "Property",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 212,
      "end": 236,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 235,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 235,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 217,
              "end": 235,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 219,
                "end": 235,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 219,
                    "end": 224,
                    "typeName": {
                      "type": "Identifier",
                      "start": 219,
                      "end": 224,
                      "decorators": [],
                      "name": "Class",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 227,
                    "end": 235,
                    "typeName": {
                      "type": "Identifier",
                      "start": 227,
                      "end": 235,
                      "decorators": [],
                      "name": "Property",
                      "optional": false
                    }
                  }
                ]
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
      "start": 237,
      "end": 246,
      "expression": {
        "type": "MemberExpression",
        "start": 237,
        "end": 245,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 237,
          "end": 238,
          "decorators": [],
          "name": "t",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 239,
          "end": 245,
          "decorators": [],
          "name": "parent",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
