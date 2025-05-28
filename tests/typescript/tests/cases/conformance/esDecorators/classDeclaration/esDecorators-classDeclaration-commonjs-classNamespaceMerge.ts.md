__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 144,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 21,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 21,
            "decorators": [],
            "name": "deco",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 21,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 18,
                "end": 21
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 74,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 37,
        "end": 74,
        "decorators": [
          {
            "type": "Decorator",
            "start": 24,
            "end": 29,
            "expression": {
              "type": "Identifier",
              "start": 25,
              "end": 29,
              "decorators": [],
              "name": "deco",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 43,
          "end": 50,
          "decorators": [],
          "name": "Example",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 51,
          "end": 74,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 57,
              "end": 72,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 64,
                "end": 67,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 67,
                "end": 72,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 70,
                  "end": 72,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 76,
      "end": 128,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 83,
        "end": 128,
        "id": {
          "type": "Identifier",
          "start": 93,
          "end": 100,
          "decorators": [],
          "name": "Example",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 101,
          "end": 128,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 107,
              "end": 126,
              "declaration": {
                "type": "VariableDeclaration",
                "start": 114,
                "end": 126,
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 120,
                    "end": 125,
                    "id": {
                      "type": "Identifier",
                      "start": 120,
                      "end": 121,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Literal",
                      "start": 124,
                      "end": 125,
                      "value": 1,
                      "raw": "1"
                    },
                    "definite": false
                  }
                ],
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": []
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 144,
      "expression": {
        "type": "CallExpression",
        "start": 130,
        "end": 143,
        "callee": {
          "type": "MemberExpression",
          "start": 130,
          "end": 141,
          "object": {
            "type": "Identifier",
            "start": 130,
            "end": 137,
            "decorators": [],
            "name": "Example",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 138,
            "end": 141,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
