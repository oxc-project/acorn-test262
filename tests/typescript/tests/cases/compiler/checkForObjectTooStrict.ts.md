__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 250,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 49,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 49,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 18,
            "end": 46,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 25,
              "end": 46,
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
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 38,
                "end": 46,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 54,
      "end": 149,
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
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "start": 72,
        "end": 82,
        "object": {
          "type": "Identifier",
          "start": 72,
          "end": 75,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 76,
          "end": 82,
          "decorators": [],
          "name": "Object",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 83,
        "end": 149,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 105,
            "end": 146,
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
            "value": {
              "type": "FunctionExpression",
              "start": 117,
              "end": 146,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 120,
                "end": 146,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 131,
                    "end": 139,
                    "expression": {
                      "type": "CallExpression",
                      "start": 131,
                      "end": 138,
                      "callee": {
                        "type": "Super",
                        "start": 131,
                        "end": 136
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 152,
      "end": 250,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 177,
        "end": 250,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 184,
            "end": 247,
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
            "value": {
              "type": "FunctionExpression",
              "start": 196,
              "end": 247,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 199,
                "end": 247,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 232,
                    "end": 240,
                    "expression": {
                      "type": "CallExpression",
                      "start": 232,
                      "end": 239,
                      "callee": {
                        "type": "Super",
                        "start": 232,
                        "end": 237
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
