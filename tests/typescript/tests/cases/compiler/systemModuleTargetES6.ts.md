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
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 20,
          "decorators": [],
          "name": "MyClass",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 21,
          "end": 24,
          "body": []
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 25,
      "end": 125,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 32,
        "end": 125,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 38,
          "end": 46,
          "decorators": [],
          "name": "MyClass2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 47,
          "end": 125,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 53,
              "end": 71,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 60,
                "end": 65,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 68,
                "end": 70,
                "value": 42,
                "raw": "42"
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 76,
              "end": 123,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 83,
                "end": 94,
                "decorators": [],
                "name": "getInstance",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 94,
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
                          "decorators": [],
                          "name": "MyClass2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 115,
                          "end": 120,
                          "decorators": [],
                          "name": "value",
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
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "myFunction",
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
                  "decorators": [],
                  "name": "MyClass",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "myFunction2",
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
                  "decorators": [],
                  "name": "MyClass2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
