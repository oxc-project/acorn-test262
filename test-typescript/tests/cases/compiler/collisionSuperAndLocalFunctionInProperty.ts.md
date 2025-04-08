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
        "name": "_super",
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
        "start": 18,
        "end": 33,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 35,
      "end": 167,
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 44,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 167,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 50,
            "end": 165,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 62,
              "name": "prop1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectExpression",
              "start": 65,
              "end": 165,
              "properties": [
                {
                  "type": "Property",
                  "start": 75,
                  "end": 160,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 75,
                    "end": 82,
                    "name": "doStuff",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 84,
                    "end": 160,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "name": "_super",
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
                            "start": 122,
                            "end": 149,
                            "body": []
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
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
    {
      "type": "ClassDeclaration",
      "start": 168,
      "end": 309,
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 175,
        "name": "b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 184,
        "end": 187,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 188,
        "end": 309,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 194,
            "end": 307,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 201,
              "end": 206,
              "name": "prop2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectExpression",
              "start": 209,
              "end": 307,
              "properties": [
                {
                  "type": "Property",
                  "start": 219,
                  "end": 301,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 226,
                    "name": "doStuff",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 228,
                    "end": 301,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "name": "_super",
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
                            "start": 266,
                            "end": 290,
                            "body": []
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
