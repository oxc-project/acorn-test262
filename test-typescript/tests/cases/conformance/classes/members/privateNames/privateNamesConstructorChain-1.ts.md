__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 395,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 229,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "name": "Parent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 229,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 19,
            "end": 28,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 19,
              "end": 23,
              "name": "foo"
            },
            "value": {
              "type": "Literal",
              "start": 26,
              "end": 27,
              "value": 3,
              "raw": "3"
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
            "type": "PropertyDefinition",
            "start": 33,
            "end": 49,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 40,
              "end": 44,
              "name": "bar"
            },
            "value": {
              "type": "Literal",
              "start": 47,
              "end": 48,
              "value": 5,
              "raw": "5"
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
            "start": 54,
            "end": 227,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 70,
              "name": "accessChildProps",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 70,
              "end": 227,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 73,
                "end": 227,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 83,
                    "end": 100,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 83,
                      "end": 99,
                      "object": {
                        "type": "NewExpression",
                        "start": 83,
                        "end": 94,
                        "callee": {
                          "type": "Identifier",
                          "start": 87,
                          "end": 92,
                          "name": "Child",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "typeArguments": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 95,
                        "end": 99,
                        "name": "foo"
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 184,
                    "end": 195,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 184,
                      "end": 194,
                      "object": {
                        "type": "Identifier",
                        "start": 184,
                        "end": 189,
                        "name": "Child",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 190,
                        "end": 194,
                        "name": "bar"
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
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
    {
      "type": "ClassDeclaration",
      "start": 231,
      "end": 394,
      "id": {
        "type": "Identifier",
        "start": 237,
        "end": 242,
        "name": "Child",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 251,
        "end": 257,
        "name": "Parent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 258,
        "end": 394,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 264,
            "end": 277,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 264,
              "end": 268,
              "name": "foo"
            },
            "value": {
              "type": "Literal",
              "start": 271,
              "end": 276,
              "value": "foo",
              "raw": "\"foo\""
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
            "type": "PropertyDefinition",
            "start": 367,
            "end": 380,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 367,
              "end": 371,
              "name": "bar"
            },
            "value": {
              "type": "Literal",
              "start": 374,
              "end": 379,
              "value": "bar",
              "raw": "\"bar\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
