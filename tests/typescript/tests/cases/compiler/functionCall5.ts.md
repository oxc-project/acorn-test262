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
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
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
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 28,
                "end": 30
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 40,
                      "end": 41
                    },
                    "typeAnnotation": null,
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 33,
                    "end": 42
                  }
                ],
                "start": 31,
                "end": 44
              },
              "abstract": false,
              "declare": false,
              "start": 22,
              "end": 44
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 15,
            "end": 44
          }
        ],
        "start": 13,
        "end": 45
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 59
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 64
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 67
            },
            "start": 62,
            "end": 67
          },
          "typeArguments": null,
          "start": 62,
          "end": 67
        },
        "start": 61,
        "end": 67
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 81
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 84
                },
                "optional": false,
                "computed": false,
                "start": 79,
                "end": 84
              },
              "typeArguments": null,
              "arguments": [],
              "start": 75,
              "end": 86
            },
            "start": 68,
            "end": 87
          }
        ],
        "start": 67,
        "end": 88
      },
      "expression": false,
      "start": 47,
      "end": 88
    },
    {
      "type": "EmptyStatement",
      "start": 88,
      "end": 89
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 96
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 102
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 99,
            "end": 104
          },
          "definite": false,
          "start": 95,
          "end": 104
        }
      ],
      "declare": false,
      "start": 91,
      "end": 105
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 105
}
```
