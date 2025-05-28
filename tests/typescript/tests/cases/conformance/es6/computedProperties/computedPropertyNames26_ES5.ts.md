__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 125,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 50,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 48,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 20,
              "end": 48,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 23,
                "end": 48,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 33,
                    "end": 42,
                    "argument": {
                      "type": "Literal",
                      "start": 40,
                      "end": 41,
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
      "start": 51,
      "end": 125,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 67,
        "end": 71,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 72,
        "end": 125,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 78,
            "end": 123,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 88,
              "end": 111,
              "object": {
                "type": "ObjectExpression",
                "start": 88,
                "end": 108,
                "properties": [
                  {
                    "type": "Property",
                    "start": 90,
                    "end": 106,
                    "kind": "init",
                    "key": {
                      "type": "CallExpression",
                      "start": 91,
                      "end": 102,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 91,
                        "end": 100,
                        "object": {
                          "type": "Super",
                          "start": 91,
                          "end": 96
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 97,
                          "end": 100,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 105,
                      "end": 106,
                      "value": 1,
                      "raw": "1"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false
                  }
                ]
              },
              "property": {
                "type": "Literal",
                "start": 109,
                "end": 110,
                "value": 0,
                "raw": "0"
              },
              "optional": false,
              "computed": true
            },
            "value": {
              "type": "FunctionExpression",
              "start": 117,
              "end": 123,
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
                "end": 123,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": true,
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
