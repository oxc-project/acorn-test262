__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 272,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 48,
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 48,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 24,
            "end": 46,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 35,
              "decorators": [],
              "name": "getGreeting",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 45,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 39,
                "end": 45
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
        "start": 10,
        "end": 17,
        "decorators": [],
        "name": "Greeter",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 50,
      "end": 103,
      "body": {
        "type": "TSInterfaceBody",
        "start": 79,
        "end": 103,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 85,
            "end": 101,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 91,
              "end": 100,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 93,
                "end": 100,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 100,
                  "decorators": [],
                  "name": "Greeter",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 78,
        "decorators": [],
        "name": "GreeterConstructor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 105,
      "end": 166,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 113,
        "end": 166,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 119,
            "end": 164,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 119,
              "end": 130,
              "decorators": [],
              "name": "getGreeting",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 130,
              "end": 164,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 133,
                "end": 164,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 143,
                    "end": 158,
                    "argument": {
                      "type": "Literal",
                      "start": 150,
                      "end": 157,
                      "raw": "'hello'",
                      "value": "hello"
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 112,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 168,
      "end": 219,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 174,
          "end": 218,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 174,
            "end": 188,
            "decorators": [],
            "name": "getGreeterBase",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 191,
            "end": 218,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 217,
              "end": 218,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 213,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 195,
                "end": 213,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 213,
                  "decorators": [],
                  "name": "GreeterConstructor",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 221,
      "end": 270,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 236,
        "end": 270,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 267,
          "end": 270,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": null,
        "implements": [],
        "superClass": {
          "type": "CallExpression",
          "start": 250,
          "end": 266,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 250,
            "end": 264,
            "decorators": [],
            "name": "getGreeterBase",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        },
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
