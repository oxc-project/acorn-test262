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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 50,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 48,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 20,
              "end": 48,
              "async": false,
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
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
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
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 125,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 72,
        "end": 125,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 78,
            "end": 123,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 88,
              "end": 111,
              "computed": true,
              "object": {
                "type": "ObjectExpression",
                "start": 88,
                "end": 108,
                "properties": [
                  {
                    "type": "Property",
                    "start": 90,
                    "end": 106,
                    "computed": true,
                    "key": {
                      "type": "CallExpression",
                      "start": 91,
                      "end": 102,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 91,
                        "end": 100,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 91,
                          "end": 96
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 97,
                          "end": 100,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 105,
                      "end": 106,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 109,
                "end": 110,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 117,
              "end": 123,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 120,
                "end": 123,
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
        "start": 57,
        "end": 58,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
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
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
