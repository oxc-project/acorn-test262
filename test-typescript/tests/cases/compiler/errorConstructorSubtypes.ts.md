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
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 108,
        "name": "ErrorConstructor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 109,
        "end": 188,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 113,
            "end": 186,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 130,
              "name": "captureStackTrace",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 131,
                "end": 151,
                "name": "targetObject",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 143,
                  "end": 151,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 145,
                    "end": 151,
                    "typeName": {
                      "type": "Identifier",
                      "start": 145,
                      "end": 151,
                      "name": "Object",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 153,
                "end": 178,
                "name": "constructorOpt",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 168,
                  "end": 178,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 170,
                    "end": 178,
                    "typeName": {
                      "type": "Identifier",
                      "start": 170,
                      "end": 178,
                      "name": "Function",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 202,
            "end": 221,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 203,
              "end": 221,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 205,
                "end": 221,
                "typeName": {
                  "type": "Identifier",
                  "start": 205,
                  "end": 221,
                  "name": "ErrorConstructor",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 222,
      "end": 232,
      "expression": {
        "type": "AssignmentExpression",
        "start": 222,
        "end": 231,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 222,
          "end": 223,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 226,
          "end": 231,
          "name": "Error",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 239,
      "end": 254,
      "expression": {
        "type": "AssignmentExpression",
        "start": 239,
        "end": 253,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 239,
          "end": 240,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 243,
          "end": 253,
          "name": "RangeError",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 255,
      "end": 270,
      "expression": {
        "type": "MemberExpression",
        "start": 255,
        "end": 270,
        "object": {
          "type": "NewExpression",
          "start": 255,
          "end": 262,
          "callee": {
            "type": "Identifier",
            "start": 259,
            "end": 260,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "typeArguments": null
        },
        "property": {
          "type": "Identifier",
          "start": 263,
          "end": 270,
          "name": "message",
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
      "start": 271,
      "end": 290,
      "expression": {
        "type": "MemberExpression",
        "start": 271,
        "end": 290,
        "object": {
          "type": "Identifier",
          "start": 271,
          "end": 272,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 273,
          "end": 290,
          "name": "captureStackTrace",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
