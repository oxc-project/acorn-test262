__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 126,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 20,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 9,
        "end": 19,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 11,
            "end": 17,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 12,
              "end": 17,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 14,
                "end": 17,
                "literal": {
                  "type": "Literal",
                  "start": 14,
                  "end": 17,
                  "value": "x",
                  "raw": "'x'"
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 21,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 27,
        "name": "Y",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 30,
        "end": 40,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 32,
            "end": 38,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 38,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 35,
                "end": 38,
                "literal": {
                  "type": "Literal",
                  "start": 35,
                  "end": 38,
                  "value": "y",
                  "raw": "'y'"
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 72,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 71,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 71,
            "name": "arr",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 71,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 62,
                "end": 71,
                "types": [
                  {
                    "type": "TSArrayType",
                    "start": 62,
                    "end": 65,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 62,
                      "end": 63,
                      "typeName": {
                        "type": "Identifier",
                        "start": 62,
                        "end": 63,
                        "name": "X",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 68,
                    "end": 71,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 68,
                      "end": 69,
                      "typeName": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 69,
                        "name": "Y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ForOfStatement",
      "start": 74,
      "end": 125,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 79,
        "end": 89,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 85,
            "end": 89,
            "id": {
              "type": "Identifier",
              "start": 85,
              "end": 89,
              "name": "item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 93,
        "end": 96,
        "name": "arr",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 98,
        "end": 125,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 104,
            "end": 111,
            "expression": {
              "type": "MemberExpression",
              "start": 104,
              "end": 110,
              "object": {
                "type": "Identifier",
                "start": 104,
                "end": 108,
                "name": "item",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 109,
                "end": 110,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 116,
            "end": 123,
            "expression": {
              "type": "MemberExpression",
              "start": 116,
              "end": 122,
              "object": {
                "type": "Identifier",
                "start": 116,
                "end": 120,
                "name": "item",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 121,
                "end": 122,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
