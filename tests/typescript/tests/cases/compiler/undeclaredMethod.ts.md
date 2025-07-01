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
        "start": 7,
        "end": 8
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
                "start": 28,
                "end": 29
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
                      "start": 47,
                      "end": 51
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
                        "start": 54,
                        "end": 56
                      },
                      "expression": false,
                      "start": 51,
                      "end": 56
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 40,
                    "end": 56
                  }
                ],
                "start": 30,
                "end": 62
              },
              "abstract": false,
              "declare": false,
              "start": 22,
              "end": 62
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 15,
            "end": 62
          }
        ],
        "start": 9,
        "end": 64
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 64
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
                    "start": 72,
                    "end": 73
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 74,
                    "end": 75
                  },
                  "start": 72,
                  "end": 75
                },
                "typeArguments": null,
                "start": 72,
                "end": 75
              },
              "start": 71,
              "end": 75
            },
            "start": 70,
            "end": 75
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
                "start": 82,
                "end": 83
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 85
              },
              "optional": false,
              "computed": false,
              "start": 82,
              "end": 85
            },
            "typeArguments": null,
            "arguments": [],
            "start": 78,
            "end": 87
          },
          "definite": false,
          "start": 70,
          "end": 87
        }
      ],
      "declare": false,
      "start": 66,
      "end": 88
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
            "start": 90,
            "end": 91
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "salt",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 96
          },
          "optional": false,
          "computed": false,
          "start": 90,
          "end": 96
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 90,
        "end": 98
      },
      "directive": null,
      "start": 90,
      "end": 99
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
            "start": 108,
            "end": 109
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "saltbar",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 117
          },
          "optional": false,
          "computed": false,
          "start": 108,
          "end": 117
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 108,
        "end": 119
      },
      "directive": null,
      "start": 108,
      "end": 120
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 130
}
```
