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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "name": "m1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 42,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 12,
            "end": 41,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 19,
              "end": 41,
              "id": {
                "type": "Identifier",
                "start": 25,
                "end": 27,
                "name": "c1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 28,
                "end": 41,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 30,
                    "end": 39,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 37,
                      "end": 38,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
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
      "type": "FunctionDeclaration",
      "start": 44,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 56,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "callee": {
                "type": "MemberExpression",
                "start": 76,
                "end": 81,
                "object": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 78,
                  "name": "m1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 81,
                  "name": "c1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 58,
        "end": 64,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 59,
          "end": 64,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 59,
            "end": 64,
            "left": {
              "type": "Identifier",
              "start": 59,
              "end": 61,
              "name": "m1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 62,
              "end": 64,
              "name": "c1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "typeArguments": null
        }
      }
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
          "id": {
            "type": "Identifier",
            "start": 92,
            "end": 93,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 96,
            "end": 101,
            "callee": {
              "type": "Identifier",
              "start": 96,
              "end": 99,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
