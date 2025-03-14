symbolProperty12.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 131,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 49,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 49,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 47,
            "accessibility": "private",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "start": 23,
              "end": 38,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 23,
                "end": 29,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 30,
                "end": 38,
                "decorators": [],
                "name": "iterator",
                "optional": false
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 46,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 41,
                "end": 46,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 43,
                    "end": 44,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 44,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false
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
      "start": 50,
      "end": 95,
      "body": {
        "type": "TSInterfaceBody",
        "start": 62,
        "end": 95,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 68,
            "end": 93,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 69,
              "end": 84,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 69,
                "end": 75,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 76,
                "end": 84,
                "decorators": [],
                "name": "iterator",
                "optional": false
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 92,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 87,
                "end": 92,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 89,
                    "end": 90,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 90,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 61,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 97,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 105,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 101,
            "end": 105,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 105,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 104,
                "end": 105,
                "typeName": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 105,
                  "decorators": [],
                  "name": "I",
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
      "start": 107,
      "end": 117,
      "expression": {
        "type": "AssignmentExpression",
        "start": 107,
        "end": 116,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 107,
          "end": 108,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "NewExpression",
          "start": 111,
          "end": 116,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 115,
            "end": 116,
            "decorators": [],
            "name": "C",
            "optional": false
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 118,
      "end": 131,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 130,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 126,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 126,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 125,
                "end": 126,
                "typeName": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 126,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "decorators": [],
            "name": "i",
            "optional": false
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
