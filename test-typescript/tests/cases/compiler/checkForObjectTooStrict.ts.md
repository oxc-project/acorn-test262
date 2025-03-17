__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 251,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 49,
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 49,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 18,
            "end": 46,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 25,
              "end": 46,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 38,
                "end": 46,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 31,
                "end": 37,
                "decorators": [],
                "name": "Object",
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
        "end": 10,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 54,
      "end": 149,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 83,
        "end": 149,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 105,
            "end": 146,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 116,
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
              "start": 117,
              "end": 146,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 120,
                "end": 146,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 131,
                    "end": 139,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 131,
                      "end": 138,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 131,
                        "end": 136
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
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
        "start": 60,
        "end": 63,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "MemberExpression",
        "start": 72,
        "end": 82,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 72,
          "end": 75,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 76,
          "end": 82,
          "decorators": [],
          "name": "Object",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 152,
      "end": 250,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 177,
        "end": 250,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 184,
            "end": 247,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 184,
              "end": 195,
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
              "start": 196,
              "end": 247,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 199,
                "end": 247,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 232,
                    "end": 240,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 232,
                      "end": 239,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 232,
                        "end": 237
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
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
        "start": 158,
        "end": 161,
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 170,
        "end": 176,
        "decorators": [],
        "name": "Object",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
