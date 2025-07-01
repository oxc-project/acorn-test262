__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Greeter",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 17
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getGreeting",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 35
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 39,
                "end": 45
              },
              "start": 37,
              "end": 45
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 24,
            "end": 46
          }
        ],
        "start": 18,
        "end": 48
      },
      "declare": false,
      "start": 0,
      "end": 48
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GreeterConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 78
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Greeter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 100
                },
                "typeArguments": null,
                "start": 93,
                "end": 100
              },
              "start": 91,
              "end": 100
            },
            "start": 85,
            "end": 101
          }
        ],
        "start": 79,
        "end": 103
      },
      "declare": false,
      "start": 50,
      "end": 103
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 112
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getGreeting",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 130
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "'hello'",
                      "start": 150,
                      "end": 157
                    },
                    "start": 143,
                    "end": 158
                  }
                ],
                "start": 133,
                "end": 164
              },
              "expression": false,
              "start": 130,
              "end": 164
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 119,
            "end": 164
          }
        ],
        "start": 113,
        "end": 166
      },
      "abstract": false,
      "declare": false,
      "start": 105,
      "end": 166
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "getGreeterBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 188
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "GreeterConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 195,
                  "end": 213
                },
                "typeArguments": null,
                "start": 195,
                "end": 213
              },
              "start": 193,
              "end": 213
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 218
            },
            "id": null,
            "generator": false,
            "start": 191,
            "end": 218
          },
          "definite": false,
          "start": 174,
          "end": 218
        }
      ],
      "declare": false,
      "start": 168,
      "end": 219
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": null,
        "typeParameters": null,
        "superClass": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "getGreeterBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 250,
            "end": 264
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 250,
          "end": 266
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 267,
          "end": 270
        },
        "abstract": false,
        "declare": false,
        "start": 236,
        "end": 270
      },
      "exportKind": "value",
      "start": 221,
      "end": 270
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 271
}
```
