propertyNameWithoutTypeAnnotation.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 212,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 20,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 20,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 18,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "foo",
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
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 46,
      "body": {
        "type": "TSInterfaceBody",
        "start": 34,
        "end": 46,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 40,
            "end": 44,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 43,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 33,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 67,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 67,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 67,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 55,
                "end": 67,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 61,
                    "end": 65,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 64,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false
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
      "type": "VariableDeclaration",
      "start": 69,
      "end": 94,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 94,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 74,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 77,
            "end": 94,
            "properties": [
              {
                "type": "Property",
                "start": 83,
                "end": 92,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 86,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 88,
                  "end": 92,
                  "raw": "null",
                  "value": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 133,
      "end": 156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 155,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 139,
            "decorators": [],
            "name": "r1",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 142,
            "end": 155,
            "computed": false,
            "object": {
              "type": "NewExpression",
              "start": 143,
              "end": 150,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 147,
                "end": 148,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 152,
              "end": 155,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 157,
      "end": 180,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 161,
          "end": 179,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 161,
            "end": 163,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 166,
            "end": 179,
            "computed": false,
            "object": {
              "type": "TSTypeAssertion",
              "start": 167,
              "end": 174,
              "expression": {
                "type": "Literal",
                "start": 170,
                "end": 174,
                "raw": "null",
                "value": null
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 168,
                "end": 169,
                "typeName": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 169,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 176,
              "end": 179,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 181,
      "end": 196,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 195,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 187,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 190,
            "end": 195,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 190,
              "end": 191,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 192,
              "end": 195,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 197,
      "end": 212,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 211,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 203,
            "decorators": [],
            "name": "r4",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 206,
            "end": 211,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 206,
              "end": 207,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 208,
              "end": 211,
              "decorators": [],
              "name": "foo",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
