__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 32
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
                      "name": "salt",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 50,
                      "end": 54
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
                        "body": [],
                        "start": 57,
                        "end": 59
                      },
                      "expression": false,
                      "start": 54,
                      "end": 59
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 43,
                    "end": 59
                  }
                ],
                "start": 33,
                "end": 65
              },
              "abstract": false,
              "declare": false,
              "start": 25,
              "end": 65
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 65
          }
        ],
        "start": 12,
        "end": 67
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 67
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 75,
                    "end": 76
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 77,
                    "end": 78
                  },
                  "start": 75,
                  "end": 78
                },
                "typeArguments": null,
                "start": 75,
                "end": 78
              },
              "start": 74,
              "end": 78
            },
            "start": 73,
            "end": 78
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 86
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 87,
                "end": 88
              },
              "optional": false,
              "computed": false,
              "start": 85,
              "end": 88
            },
            "typeArguments": null,
            "arguments": [],
            "start": 81,
            "end": 90
          },
          "definite": false,
          "start": 73,
          "end": 90
        }
      ],
      "declare": false,
      "start": 69,
      "end": 91
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 94
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "salt",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 99
          },
          "optional": false,
          "computed": false,
          "start": 93,
          "end": 99
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 93,
        "end": 101
      },
      "directive": null,
      "start": 93,
      "end": 102
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 112
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "saltbar",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 120
          },
          "optional": false,
          "computed": false,
          "start": 111,
          "end": 120
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 111,
        "end": 122
      },
      "directive": null,
      "start": 111,
      "end": 123
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 133
}
```
