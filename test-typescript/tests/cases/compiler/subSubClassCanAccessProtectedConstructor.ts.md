__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 435,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 92,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 92,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 44,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 38,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 38,
              "end": 44,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 41,
                "end": 44,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 49,
            "end": 79,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 65,
              "decorators": [],
              "name": "instance1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "NewExpression",
              "start": 68,
              "end": 78,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 72,
                "end": 76,
                "decorators": [],
                "name": "Base",
                "optional": false
              }
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
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 94,
      "end": 225,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 122,
        "end": 225,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 128,
            "end": 160,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 146,
              "decorators": [],
              "name": "instance1_1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "NewExpression",
              "start": 149,
              "end": 159,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 153,
                "end": 157,
                "decorators": [],
                "name": "Base",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 176,
            "end": 212,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 183,
              "end": 194,
              "decorators": [],
              "name": "instance1_2",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "NewExpression",
              "start": 197,
              "end": 211,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 201,
                "end": 209,
                "decorators": [],
                "name": "Subclass",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 108,
        "decorators": [],
        "name": "Subclass",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 117,
        "end": 121,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 227,
      "end": 434,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 269,
        "end": 434,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 275,
            "end": 307,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 282,
              "end": 293,
              "decorators": [],
              "name": "instance2_1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "NewExpression",
              "start": 296,
              "end": 306,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 300,
                "end": 304,
                "decorators": [],
                "name": "Base",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 323,
            "end": 359,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 330,
              "end": 341,
              "decorators": [],
              "name": "instance2_2",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "NewExpression",
              "start": 344,
              "end": 358,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 348,
                "end": 356,
                "decorators": [],
                "name": "Subclass",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 375,
            "end": 421,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 382,
              "end": 393,
              "decorators": [],
              "name": "instance2_3",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "NewExpression",
              "start": 396,
              "end": 420,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 400,
                "end": 418,
                "decorators": [],
                "name": "SubclassOfSubclass",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 251,
        "decorators": [],
        "name": "SubclassOfSubclass",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 260,
        "end": 268,
        "decorators": [],
        "name": "Subclass",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
