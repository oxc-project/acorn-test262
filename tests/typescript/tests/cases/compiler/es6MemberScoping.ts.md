__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 243,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 160,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 160,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 46,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 27,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 27,
              "end": 46,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 28,
                  "end": 41,
                  "decorators": [],
                  "name": "store",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 33,
                    "end": 41,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 35,
                      "end": 41
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 43,
                "end": 46,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 52,
            "end": 108,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 62,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 62,
              "end": 108,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 65,
                "end": 108,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 75,
                    "end": 101,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 82,
                      "end": 100,
                      "object": {
                        "type": "MemberExpression",
                        "start": 82,
                        "end": 93,
                        "object": {
                          "type": "ThisExpression",
                          "start": 82,
                          "end": 86
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 87,
                          "end": 93,
                          "decorators": [],
                          "name": "_store",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 94,
                        "end": 100,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "PropertyDefinition",
            "start": 113,
            "end": 135,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 126,
              "decorators": [],
              "name": "_store",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "start": 129,
              "end": 134,
              "decorators": [],
              "name": "store",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 162,
      "end": 243,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 172,
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 173,
        "end": 243,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 179,
            "end": 213,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 186,
              "end": 190,
              "decorators": [],
              "name": "Foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 190,
              "end": 213,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 192,
                "end": 199,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 193,
                  "end": 199
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 200,
                "end": 213,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 202,
                    "end": 211,
                    "argument": {
                      "type": "Literal",
                      "start": 209,
                      "end": 210,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
