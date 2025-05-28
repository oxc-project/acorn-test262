__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 123,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 123,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 123,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 19,
            "end": 121,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 23,
                "end": 121,
                "id": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ClassExpression",
                  "start": 27,
                  "end": 121,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 34,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "start": 35,
                    "end": 121,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 45,
                        "end": 62,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 52,
                          "end": 57,
                          "decorators": [],
                          "name": "prop1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "Literal",
                          "start": 60,
                          "end": 61,
                          "value": 1,
                          "raw": "1"
                        },
                        "computed": false,
                        "static": false,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": "public"
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 71,
                        "end": 88,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 79,
                          "end": 82,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 82,
                          "end": 88,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 85,
                            "end": 88,
                            "body": []
                          },
                          "expression": false
                        },
                        "kind": "method",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": "private"
                      },
                      {
                        "type": "PropertyDefinition",
                        "start": 97,
                        "end": 115,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 104,
                          "end": 109,
                          "decorators": [],
                          "name": "prop2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "Literal",
                          "start": 112,
                          "end": 114,
                          "value": 43,
                          "raw": "43"
                        },
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null
                      }
                    ]
                  },
                  "abstract": false,
                  "declare": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
