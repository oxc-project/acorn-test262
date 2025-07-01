__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "deco",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 18,
                "end": 21
              },
              "start": 16,
              "end": 21
            },
            "start": 12,
            "end": 21
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 21
        }
      ],
      "declare": true,
      "start": 0,
      "end": 22
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "deco",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 29
            },
            "start": 24,
            "end": 29
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Example",
          "optional": false,
          "typeAnnotation": null,
          "start": 43,
          "end": 50
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 67
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
                  "start": 70,
                  "end": 72
                },
                "expression": false,
                "start": 67,
                "end": 72
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 57,
              "end": 72
            }
          ],
          "start": 51,
          "end": 74
        },
        "abstract": false,
        "declare": false,
        "start": 37,
        "end": 74
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 30,
      "end": 74
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Example",
          "optional": false,
          "typeAnnotation": null,
          "start": 93,
          "end": 100
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 120,
                      "end": 121
                    },
                    "init": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 124,
                      "end": 125
                    },
                    "definite": false,
                    "start": 120,
                    "end": 125
                  }
                ],
                "declare": false,
                "start": 114,
                "end": 126
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 107,
              "end": 126
            }
          ],
          "start": 101,
          "end": 128
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 83,
        "end": 128
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 76,
      "end": 128
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
            "name": "Example",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 137
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 138,
            "end": 141
          },
          "optional": false,
          "computed": false,
          "start": 130,
          "end": 141
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 130,
        "end": 143
      },
      "directive": null,
      "start": 130,
      "end": 144
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 144
}
```
