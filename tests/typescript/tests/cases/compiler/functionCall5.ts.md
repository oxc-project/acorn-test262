__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 102,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 42,
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 42,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 12,
            "end": 41,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 19,
              "end": 41,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 28,
                "end": 41,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 30,
                    "end": 39,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 37,
                      "end": 38,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": null,
                    "value": null
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 25,
                "end": 27,
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "FunctionDeclaration",
      "start": 44,
      "end": 85,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 64,
        "end": 85,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 65,
            "end": 84,
            "argument": {
              "type": "NewExpression",
              "start": 72,
              "end": 83,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 76,
                "end": 81,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 78,
                  "decorators": [],
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 81,
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 56,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 58,
        "end": 64,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 59,
          "end": 64,
          "typeArguments": null,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 59,
            "end": 64,
            "left": {
              "type": "Identifier",
              "start": 59,
              "end": 61,
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 62,
              "end": 64,
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 85,
      "end": 86
    },
    {
      "type": "VariableDeclaration",
      "start": 88,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 92,
          "end": 101,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 96,
            "end": 101,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 96,
              "end": 99,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
