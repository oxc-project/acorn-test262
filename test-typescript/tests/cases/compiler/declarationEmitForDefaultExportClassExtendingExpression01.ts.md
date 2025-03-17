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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 17,
        "name": "Greeter",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 48,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 24,
            "end": 46,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 35,
              "name": "getGreeting",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 50,
      "end": 103,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 78,
        "name": "GreeterConstructor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 79,
        "end": 103,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 85,
            "end": 101,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 91,
              "end": 100,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 93,
                "end": 100,
                "typeName": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 100,
                  "name": "Greeter",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 105,
      "end": 166,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 112,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 113,
        "end": 166,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 119,
            "end": 164,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 119,
              "end": 130,
              "name": "getGreeting",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 130,
              "end": 164,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": "hello",
                      "raw": "'hello'"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 174,
            "end": 188,
            "name": "getGreeterBase",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 191,
            "end": 218,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "Identifier",
              "start": 217,
              "end": 218,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 193,
              "end": 213,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 195,
                "end": 213,
                "typeName": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 213,
                  "name": "GreeterConstructor",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 221,
      "end": 270,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 236,
        "end": 270,
        "id": null,
        "superClass": {
          "type": "CallExpression",
          "start": 250,
          "end": 266,
          "callee": {
            "type": "Identifier",
            "start": 250,
            "end": 264,
            "name": "getGreeterBase",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        },
        "body": {
          "type": "ClassBody",
          "start": 267,
          "end": 270,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
