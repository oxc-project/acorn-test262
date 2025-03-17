__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 247,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 24,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 24,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 20,
          "name": "MyClass",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 21,
          "end": 24,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 25,
      "end": 125,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 32,
        "end": 125,
        "id": {
          "type": "Identifier",
          "start": 38,
          "end": 46,
          "name": "MyClass2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 47,
          "end": 125,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 53,
              "end": 71,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 60,
                "end": 65,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 68,
                "end": 70,
                "value": 42,
                "raw": "42"
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 76,
              "end": 123,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 83,
                "end": 94,
                "name": "getInstance",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 94,
                "end": 123,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 97,
                  "end": 123,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 99,
                      "end": 121,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 106,
                        "end": 120,
                        "object": {
                          "type": "Identifier",
                          "start": 106,
                          "end": 114,
                          "name": "MyClass2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 115,
                          "end": 120,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 127,
      "end": 185,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 134,
        "end": 185,
        "id": {
          "type": "Identifier",
          "start": 143,
          "end": 153,
          "name": "myFunction",
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
          "start": 156,
          "end": 185,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 162,
              "end": 183,
              "argument": {
                "type": "NewExpression",
                "start": 169,
                "end": 182,
                "callee": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 180,
                  "name": "MyClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 187,
      "end": 247,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 194,
        "end": 247,
        "id": {
          "type": "Identifier",
          "start": 203,
          "end": 214,
          "name": "myFunction2",
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
          "start": 217,
          "end": 247,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 223,
              "end": 245,
              "argument": {
                "type": "NewExpression",
                "start": 230,
                "end": 244,
                "callee": {
                  "type": "Identifier",
                  "start": 234,
                  "end": 242,
                  "name": "MyClass2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
