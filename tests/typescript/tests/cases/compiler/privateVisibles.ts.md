__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
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
              "name": "pvar",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 25
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 28,
              "end": 29
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 13,
            "end": 30
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 43
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
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 57,
                          "end": 58
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 61,
                            "end": 65
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "pvar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 66,
                            "end": 70
                          },
                          "optional": false,
                          "computed": false,
                          "start": 61,
                          "end": 70
                        },
                        "definite": false,
                        "start": 57,
                        "end": 70
                      }
                    ],
                    "declare": false,
                    "start": 53,
                    "end": 71
                  }
                ],
                "start": 46,
                "end": 74
              },
              "expression": false,
              "start": 43,
              "end": 74
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 32,
            "end": 74
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "meth",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 88
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
                          "name": "q",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 97,
                          "end": 98
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 101,
                            "end": 105
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "pvar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 106,
                            "end": 110
                          },
                          "optional": false,
                          "computed": false,
                          "start": 101,
                          "end": 110
                        },
                        "definite": false,
                        "start": 97,
                        "end": 110
                      }
                    ],
                    "declare": false,
                    "start": 93,
                    "end": 111
                  }
                ],
                "start": 91,
                "end": 112
              },
              "expression": false,
              "start": 88,
              "end": 112
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 77,
            "end": 112
          }
        ],
        "start": 10,
        "end": 114
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 114
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 114
}
```
