__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 96,
  "end": 530,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 96,
      "end": 124,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 103,
        "end": 124,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 122,
          "end": 124,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 112,
          "end": 115,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 116,
            "end": 117,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 119,
            "end": 120,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 157,
      "end": 474,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 164,
        "end": 474,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 176,
          "end": 474,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 277,
              "end": 382,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 277,
                "end": 288,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 288,
                "end": 382,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 295,
                  "end": 382,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 361,
                      "end": 376,
                      "directive": null,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 361,
                        "end": 375,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 361,
                          "end": 371,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 361,
                            "end": 365
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 366,
                            "end": 371,
                            "decorators": [],
                            "name": "field",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 374,
                          "end": 375,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 289,
                    "end": 290,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 292,
                    "end": 293,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 463,
              "end": 472,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 463,
                "end": 467,
                "decorators": [],
                "name": "doIt",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 467,
                "end": 472,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 470,
                  "end": 472,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 170,
          "end": 175,
          "decorators": [],
          "name": "Aleph",
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 510,
      "end": 530,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 517,
        "end": 530,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 523,
            "end": 529,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 523,
              "end": 524,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 527,
              "end": 529,
              "raw": "12",
              "value": 12
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
