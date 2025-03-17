__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 131,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 64,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 62,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 62,
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 30,
                "end": 62,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 40,
                    "end": 56,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 47,
                      "end": 51,
                      "name": "salt",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 51,
                      "end": 56,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 54,
                        "end": 56,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 88,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 87,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 75,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 75,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 72,
                "end": 75,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 72,
                  "end": 75,
                  "left": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 73,
                    "name": "M",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 75,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 78,
            "end": 87,
            "callee": {
              "type": "MemberExpression",
              "start": 82,
              "end": 85,
              "object": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 90,
      "end": 99,
      "expression": {
        "type": "CallExpression",
        "start": 90,
        "end": 98,
        "callee": {
          "type": "MemberExpression",
          "start": 90,
          "end": 96,
          "object": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 92,
            "end": 96,
            "name": "salt",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 108,
      "end": 120,
      "expression": {
        "type": "CallExpression",
        "start": 108,
        "end": 119,
        "callee": {
          "type": "MemberExpression",
          "start": 108,
          "end": 117,
          "object": {
            "type": "Identifier",
            "start": 108,
            "end": 109,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 110,
            "end": 117,
            "name": "saltbar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
