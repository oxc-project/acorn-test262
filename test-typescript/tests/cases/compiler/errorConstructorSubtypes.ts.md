__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 82,
  "end": 291,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 82,
      "end": 188,
      "body": {
        "type": "TSInterfaceBody",
        "start": 109,
        "end": 188,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 113,
            "end": 186,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 130,
              "decorators": [],
              "name": "captureStackTrace",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 131,
                "end": 151,
                "decorators": [],
                "name": "targetObject",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 143,
                  "end": 151,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 145,
                    "end": 151,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 145,
                      "end": 151,
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 153,
                "end": 178,
                "decorators": [],
                "name": "constructorOpt",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 168,
                  "end": 178,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 170,
                    "end": 178,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 170,
                      "end": 178,
                      "decorators": [],
                      "name": "Function",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 185,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 181,
                "end": 185
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 108,
        "decorators": [],
        "name": "ErrorConstructor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 190,
      "end": 221,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 202,
          "end": 221,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 202,
            "end": 221,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 203,
              "end": 221,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 205,
                "end": 221,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 205,
                  "end": 221,
                  "decorators": [],
                  "name": "ErrorConstructor",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 222,
      "end": 232,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 222,
        "end": 231,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 222,
          "end": 223,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 226,
          "end": 231,
          "decorators": [],
          "name": "Error",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 239,
      "end": 254,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 239,
        "end": 253,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 239,
          "end": 240,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 243,
          "end": 253,
          "decorators": [],
          "name": "RangeError",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 255,
      "end": 270,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 255,
        "end": 270,
        "computed": false,
        "object": {
          "type": "NewExpression",
          "start": 255,
          "end": 262,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 259,
            "end": 260,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 263,
          "end": 270,
          "decorators": [],
          "name": "message",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 271,
      "end": 290,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 271,
        "end": 290,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 271,
          "end": 272,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 273,
          "end": 290,
          "decorators": [],
          "name": "captureStackTrace",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
