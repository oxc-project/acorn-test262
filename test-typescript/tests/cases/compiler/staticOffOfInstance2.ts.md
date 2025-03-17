__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 124,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 123,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 123,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 20,
            "end": 93,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 31,
              "decorators": [],
              "name": "Blah",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 31,
              "end": 93,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 93,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 44,
                    "end": 55,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 44,
                      "end": 54,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 44,
                        "end": 52,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 44,
                          "end": 48
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 49,
                          "end": 52,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 76,
                    "end": 87,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 76,
                      "end": 86,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 76,
                        "end": 84,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 76,
                          "end": 80,
                          "decorators": [],
                          "name": "List",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 81,
                          "end": 84,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
          },
          {
            "type": "MethodDefinition",
            "start": 98,
            "end": 121,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 112,
              "end": 115,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 115,
              "end": 121,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 118,
                "end": 121,
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
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "List",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
