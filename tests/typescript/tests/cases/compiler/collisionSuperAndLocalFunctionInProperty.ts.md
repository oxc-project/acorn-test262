__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 309,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "decorators": [],
        "name": "_super",
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
        "start": 18,
        "end": 33,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 35,
      "end": 167,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 44,
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
        "start": 45,
        "end": 167,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 50,
            "end": 165,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 62,
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "start": 65,
              "end": 165,
              "properties": [
                {
                  "type": "Property",
                  "start": 75,
                  "end": 160,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 82,
                    "decorators": [],
                    "name": "doStuff",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 84,
                    "end": 160,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 90,
                      "end": 160,
                      "body": [
                        {
                          "type": "FunctionDeclaration",
                          "start": 104,
                          "end": 149,
                          "id": {
                            "type": "Identifier",
                            "start": 113,
                            "end": 119,
                            "decorators": [],
                            "name": "_super",
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
                            "start": 122,
                            "end": 149,
                            "body": []
                          },
                          "expression": false
                        }
                      ]
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
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
      "start": 168,
      "end": 309,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 175,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 184,
        "end": 187,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 188,
        "end": 309,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 194,
            "end": 307,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 201,
              "end": 206,
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "start": 209,
              "end": 307,
              "properties": [
                {
                  "type": "Property",
                  "start": 219,
                  "end": 301,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 226,
                    "decorators": [],
                    "name": "doStuff",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 228,
                    "end": 301,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 234,
                      "end": 301,
                      "body": [
                        {
                          "type": "FunctionDeclaration",
                          "start": 248,
                          "end": 290,
                          "id": {
                            "type": "Identifier",
                            "start": 257,
                            "end": 263,
                            "decorators": [],
                            "name": "_super",
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
                            "start": 266,
                            "end": 290,
                            "body": []
                          },
                          "expression": false
                        }
                      ]
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
